public class Main {

        public static void main(String[] args) {
            // abstract = abstract classes cannot be instantiated, but they can have a subclass 
            // abstract methods are declared without an implementation
    
            Vehicle vehicle = new Vehicle();
            Car car = new Car();
        }
}

abstract class Vehicle{
    abstract void go();
}
class Car extends Vehicle{
    
    void go() {
        System.out.println("The driver is driving the car");
    }
}
