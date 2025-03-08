public class Main{
    public static void main(String[] args) {
        
        // wrapper class = provides a way to primitive data types as reference data types
        // reference data types contain useful methods
        // can be used with collections (ex. ArrayList)

        // primiticve      //wrapper
        // ----------     //---------
        // char           Character
        // bool           Boolean
        // Int           Integer
        // double           Double

        // autoboxing = the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper class
        // unboxing = the reverse of autoboxing. Automatic conversion of wrapper class to primitive

        Boolean a = true;
        // Character c = '@';
        // Integer b = 1;
        // Double d = 1.32;
        // String e = "Bro";

        if(a==true){
            System.out.println("This is true");
        }
        

    }
}