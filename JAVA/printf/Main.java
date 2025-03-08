public class Main{
    public static void main(String[] args) {
        
        // printf() = an optional methods to control, format and display text to the console window
        // two arguements = format string + object/variable/value)
        // % [flags] [precision] [ width] [conversion-character];
        
        boolean myBoolean = true;
        char myChar = '@';
        String myString = "Bro";
        int myInt = 20;
        double myDouble = 1.323;

        // System.out.printf("%b \n", myBoolean);
        // System.out.printf("%c \n", myChar);
        // System.out.printf("%s \n", myString);
        // System.out.printf("%d \n", myInt);
        // System.out.printf("%f \n", myDouble);

        // [width]
        // minimum number of characters to be written as output
        // System.out.printf("Hello %10s",myString); //+ = right justify, - = left justify

        // [precision]
        // sets number of digits of precision when outputting floating-point values
        // System.out.printf("you have this much money %.1f", myDouble);

        // [flags]
        // adds an effect to output based on the flag added to format specifier
        // - : left-justify
        // + : output a plus ( + ) or minus ( - ) sign for a numeric value
        // 0 : numeric values are zero-padded
        // , : comma grouping separator if number > 1000

        System.out.printf("you have this much money %,f", myDouble);

    }
}