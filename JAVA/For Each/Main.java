import java.util.ArrayList;

public class Main{

    public static void main(String[] args) {
        
        // for-each = traversing technique to iterate through the elements in an array/collection
        // less steps, more readable
        // less flexible

        // String[] animals = {"cat", "dog", "rat", "bat"};

        ArrayList<String> animals = new ArrayList<>();
        animals.add("cat");
        animals.add("dog");
        animals.add("bat");
        animals.add("rat");

        for (String i : animals) {
            System.out.println(i);
        }


    }
}