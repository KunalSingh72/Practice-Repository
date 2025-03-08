public class Main{
    public static void main(String[] args) {
        Pizza pizza1 = new Pizza("Thicc crust", "Tomato", "Mozzerella", "pepperoni");

        System.out.println("Ingredients : ");
        System.out.println(pizza1.bread);

        Pizza pizza2 = new Pizza("Thicc crust", "Tomato", "Mozzerella");

        System.out.println("Ingredients : ");
        System.out.println(pizza2.bread);


    }
}
