public class Main{
    public static void main(String[] args) {
        

        //methods = a block of code that is executed whenever it is called upon
        hello("hello", 21);

        int x = 3, y = 4;
        System.out.println(add(x, y));
    }
    static int add(int x, int y){

        return x + y;
    }
    static void hello(String x, int e){
        System.out.println(x +"\n"+ e);
    }

}