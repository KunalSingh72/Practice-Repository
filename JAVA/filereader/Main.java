import java.io.FileNotFoundException;
import java.io.FileReader;

public class Main{
    public static void main(String[] args) {
        try{
        FileReader reader = new FileReader("Art.txt");
        System.out.println((char)(reader.read()));
        // System.out.println(reader.read());
        reader.close();
        }
        catch(FileNotFoundException e){
            System.out.println("Not found");
        }

    }
}
