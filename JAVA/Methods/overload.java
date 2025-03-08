public class overload{
    public static void main(String[] args) {
        // overload methods = methods that share the same name but have diff parameters methods name + parameters + methods signature

        System.out.println(add(2, 8, 10.1));

    }

    static int add(int x, int y){
        System.out.println("1");
        return x + y;
    }
    static int add(int x, int y, int z){
        System.out.println("2");
        return x + y + z;
    }
    static int add(int w, int x, int y, int z){
        System.out.println("3");
        return w + x + y + z;

    }
    static double add(double x, double y){
        System.out.println("4");
        return x + y;
    }
    static double add(int x, int y, double z){
        System.out.println("5");
        return x + y + z;
    }
    static double add(int w, int x, double y, int z){
        System.out.println("6");
        return w + x + y + z;
    }
}