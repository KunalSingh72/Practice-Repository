package access_modifiers.package2;
import access_modifiers.package1.*;
public class Asub {
    public static void main(String[] args) {

        C c = new C();
        System.out.println(c.publicMessage);
    }
}
