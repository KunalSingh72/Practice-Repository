public class Main{
    public static void main(String[] args) {
        // static = modifier A single copy of a variable/method is created and shared
        // The class "owns" the static memeber 

        Friend friend1 = new Friend("Spongebob");
        Friend friend2 = new Friend("Patrick");

        System.out.println(Friend.numberOfFriends);

    }
}
class Friend {
    String name;
    static int numberOfFriends;
    Friend(String name){
        this.name = name;
        numberOfFriends++;
    }
}