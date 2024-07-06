---
title: Splitwise
slug: Splitwise
abstract: Splitwise
---

![image-title-here](assets/gitbook/images/splitwise/User_structure.png){:class="img-responsive"}

![image-title-here](assets/gitbook/images/splitwise/Settlement_structure.png){:class="img-responsive"}


```java
package org.example;

import org.example.settle.SettlementType;
import org.example.txn.Group;
import org.example.txn.Transaction;
import org.example.txn.TransactionGroup;
import org.example.txn.User;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        User user1 = new User(1, "USER1");
        User user2 = new User(2, "USER2");
        User user3 = new User(3, "USER3");
        User user4 = new User(4, "USER4");
        User user5 = new User(5, "USER5");
        User user6 = new User(6, "USER6");
        User merchant = new User(-1, "MERCHANT");


        Group groupTest = new Group("Quirk");
        groupTest.joinGroup(user1);
        groupTest.joinGroup(user2);
        groupTest.joinGroup(user3);

        Transaction t1 = new Transaction(1, 100, user1, user2 );
        Transaction t2 = new Transaction(2, 100, user2, user3 );
        //Transaction t3 = new Transaction(3, 99, user3, user1);
        //Transaction t4 = new Transaction(4, 1, user3, user2);
        //Transaction t4 = new Transaction(4, 25, user4, user1);

        TransactionGroup tg1 = new TransactionGroup("Group1");
        tg1.addTransaction(t1);
        tg1.addTransaction(t2);
        //tg1.addTransaction(t3);
        //tg1.addTransaction(t4);

        tg1.addUserToShareAmong(groupTest);
        tg1.addUserToShareAmong(user4);

        TransactionManager transactionManager = new TransactionManager();
        transactionManager.settle(tg1, SettlementType.EQUAL);

    }
}

```

```java


package org.example;

import org.example.settle.SettlementFactory;
import org.example.settle.SettlementType;
import org.example.txn.TransactionGroup;

public class TransactionManager {
    SettlementFactory factory = new SettlementFactory();

    public void settle(TransactionGroup tg1, SettlementType type) {
        factory.getInstance(type).settle(tg1);
    }
}
```

```java
package org.example.settle;

import org.example.txn.Transaction;
import org.example.txn.TransactionGroup;
import org.example.txn.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class EqualSettlement implements Settlement{

    @Override
    public void settle(TransactionGroup transactionGroup){
        double totalValue = 0;
        for (Transaction t: transactionGroup.getTransactions()){
            if (t.getPaidTo().name.equals("MERCHANT")){
                totalValue=totalValue+t.getAmount();
            }
        }

        double eachHastoPay = totalValue/transactionGroup.sharedAmong.size();
        System.out.println("eachHastoPay "+eachHastoPay +"\n");
        //sort out merchant
        HashMap<User, Double> userPaidMap = new HashMap<>();
        for (User user:transactionGroup.sharedAmong){
            userPaidMap.put(user,eachHastoPay*-1);
        }

        transactionGroup.transactions.forEach(transaction -> {
            if (transaction.getPaidTo().name.equals("MERCHANT")){
                double paid = userPaidMap.getOrDefault(transaction.getPaidBy(), 0.0);
                userPaidMap.put(transaction.getPaidBy(),paid+transaction.amount);
            }
        });

        generateInsights(userPaidMap);

        //sort out peers
        transactionGroup.transactions.forEach(transaction -> {
            if (!transaction.getPaidTo().name.equals("MERCHANT")){
                double paid = userPaidMap.getOrDefault(transaction.getPaidBy(), 0.0);
                userPaidMap.put(transaction.getPaidBy(),paid+transaction.amount);
                double payeeBal = userPaidMap.getOrDefault(transaction.getPaidTo(), 0.0);
                userPaidMap.put(transaction.getPaidTo(),payeeBal-transaction.amount);

                System.out.println(userPaidMap);
            }
        });

        System.out.println("=========================\n");
        generateInsights(userPaidMap);
    }

    @Override
    public void generateInsights(HashMap<User, Double> userPaidMap){
        List<User> payers = new ArrayList<>();
        List<User> receivers = new ArrayList<>();

        for (User user: userPaidMap.keySet()){
            if (userPaidMap.get(user)>0){
                receivers.add(user);
                System.out.println(user.name + " Gets " + userPaidMap.get(user) );
            }else {
                payers.add(user);
                System.out.println(user.name + " Has to pay " + userPaidMap.get(user) *-1 );
            }
        }
        System.out.println();
        System.out.println();

        double rcvBalance = 0.0;
        int indexrcv = 0;
        for (User payer:payers){
            double payerbalance = userPaidMap.get(payer);
            while (payerbalance!=0){
                //reciever has more
                if (userPaidMap.get(receivers.get(indexrcv))>= payerbalance*-1){
                    System.out.println(payer.name +"  has to pay "+payerbalance*-1+ " to "+receivers.get(indexrcv).name);
                    payerbalance = 0;
                }else { //payer has more
                    payerbalance = userPaidMap.get(receivers.get(indexrcv))+payerbalance;
                    rcvBalance = userPaidMap.get(receivers.get(indexrcv));
                    System.out.println(payer.name +"  has to pay "+rcvBalance+ " to "+receivers.get(indexrcv).name);
                    indexrcv++;
                }
            }
        }
    }
}

```

```java

package org.example.settle;

import org.example.txn.TransactionGroup;
import org.example.txn.User;

import java.util.HashMap;

public class PropoptionateSettlement implements Settlement{
    @Override
    public void settle(TransactionGroup transactionGroup) {

    }

    @Override
    public void generateInsights(HashMap<User, Double> userPaidMap) {

    }
}

```

```java
package org.example.settle;

import org.example.txn.TransactionGroup;
import org.example.txn.User;

import java.util.HashMap;

public interface Settlement {
    void settle(TransactionGroup transactionGroup);
    void generateInsights(HashMap<User, Double> userPaidMap);
}

```

```java
package org.example.settle;

public class SettlementFactory {

    Settlement getInstance(SettlementType type){
        switch (type){
            case EQUAL -> new EqualSettlement();
            case PROPORTIONATE -> new PropoptionateSettlement();
        }

        return new EqualSettlement();
    }
}

```

```java

package org.example.settle;

public enum SettlementType {
    EQUAL,
    UNEQUAL,
    PROPORTIONATE
}
```


```java

➜  txn git:(main) ✗ cat *   
package org.example.txn;

import java.util.ArrayList;
import java.util.List;

public class Group {
    List<User> userList;

    long id= System.currentTimeMillis();
    String name;

    public Group(String name) {
        this.name = name;
        userList = new ArrayList<>();
    }

    void joinGroup(User user){
        userList.add(user);
    }

    void leaveGroup(User user){
        userList.remove(user);
    }

    public List<User> getUserOfGroup() {
        return userList;
    }
}

```

```java

package org.example.txn;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Transaction {

    int id;
    double amount;
    User paidBy;
    User paidTo;
    String txnGroup;

    public Transaction(int id, double amount, User paidBy, User paidTo) {
        this.id = id;
        this.amount = amount;
        this.paidBy = paidBy;
        this.paidTo = paidTo;
    }
}

```

```java

package org.example.txn;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
public class TransactionGroup {
    @Setter
    String name;

    List<Transaction> transactions;

    Set<User> sharedAmong;

    public TransactionGroup(String name) {
        this.name = name;
        this.transactions = new ArrayList<>();
        this.sharedAmong = new HashSet<>();
    }

    void addTransaction(Transaction t){
        transactions.add(t);
    }

    void addUserToShareAmong(User user){
        sharedAmong.add(user);
    }

    void addUserToShareAmong(Group group){
        sharedAmong.addAll(group.userList);
    }


}

```

```java

package org.example.txn;

import lombok.ToString;

@ToString
public class User {
    int id;
    String name;

    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }


}

```