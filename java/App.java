import java.util.Scanner;
import java.util.Arrays;
import java.io.FileNotFoundException;

public class App {

    private SalesCalculator _calculator;
    private Scanner _scanner;

    public static void main(String[] args) {
        App app = new App();
        app.run();
    }

    private void run() {
        try {
            this._calculator = new SalesCalculator();
        }
        catch (FileNotFoundException x) {
            System.out.println("Could not read in data file... " + x.getMessage());
            return;
        }
        this._scanner = new Scanner(System.in);

        // Run until the user types 'exit' (prompt will return false)
        while (this.prompt()) { }
    }

    public boolean prompt() {
        System.out.print("SalesCalculator > ");
        String input = this._scanner.nextLine();
        String[] components = input.split("\\s+");
        if (components.length < 1) {
            return true;
        }
        String command = components[0];
        String[] arguments = Arrays.copyOfRange(components, 1, components.length);
        switch (command) {
            case "salespeople":
                this._calculator.salespeople();
                break;
            case "sales":
                break;
            case "clients":
                break;
            case "salespeopleRanking":
                break;
            case "clientRanking":
                break;
            case "salespersonInfo":
                break;
            case "salesByPerson":
                break;
            case"salesToClient":
                break;
            case "salesInDateRange":
                break;
            case "help":
                break;
            case "exit":
                return false;
            default:
                System.out.println("Invalid command: '" + command + "'");
                break;
        }
        return true;    
    }
}