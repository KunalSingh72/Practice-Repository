import java.util.ArrayList;

public class Main{

    public static void main(String[] args) {
        
        // ArrayList = a resizable array
        // Element can be added and removed after compilation phase
        // store refernce data types

        // 1-Dimensional
        // ArrayList<String> food = new ArrayList<String>();

        // food.add("pizza");
        // food.add("hamburger");
        // food.add("hotdog");

        // food.set(0, "shushi");
        // food.remove(2);
        // food.clear();

        // for(int i =0; i<food.size(); i++){
        //     System.out.println(food.get(i));
        // }
        
        // 2-Dimensional

        ArrayList<ArrayList<String>> groceryList = new ArrayList<ArrayList<String>>();

        ArrayList<String> bakeryList = new ArrayList<>();

        bakeryList.add("Pasta");
        bakeryList.add("Pastgarlic bread");
        bakeryList.add("donuts");

        ArrayList<String> productList = new ArrayList<>();

        productList.add("tomatoes");
        productList.add("peppers");

        ArrayList<String> drinkList = new ArrayList<>();

        drinkList.add("coffee");
        drinkList.add("soda");

        groceryList.add(bakeryList);
        groceryList.add(productList);
        groceryList.add(drinkList);

        System.out.println(groceryList.get(0).get(2));

    }
}