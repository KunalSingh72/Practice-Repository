import javax.swing.JOptionPane;

public class Main{
    public static void main(String[] args) {
     
        String name = JOptionPane.showInputDialog("enter your name: ");
        JOptionPane.showMessageDialog(null, "Hello "+ name);

        int age = Integer.parseInt(JOptionPane.showInputDialog("Enter you age"));
        JOptionPane.showMessageDialog(null, "Your age is "+ age);
    
        double height = Double.parseDouble(JOptionPane.showInputDialog("Enter you height"));
        JOptionPane.showMessageDialog(null, "Your height is "+ height+" cm");
    }

}