import java.util.Scanner;
import java.util.Arrays;
import com.google.gson.Gson;
import java.io.File;
import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.Map;
import java.io.FileNotFoundException;
import java.util.List;

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * This is a class called SalesCalculator. It contains 10 methods that should print out
 * various information about the sales people and sales. I've filled out the first one.
 * You will have to fill out the remaining 9. These methods are called for you by the 
 * command-line app.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

public class SalesCalculator {

    // Private variables
    private Salesperson[] _salespeople;
    private Sale[] _sales;

    // Constructor
    public SalesCalculator() throws FileNotFoundException {
        // Read in the data file and fill up the _salespeople and _sales arrays
        // with Salesperson and Sale objects
        String data = new Scanner(new File("../data/sales.json")).useDelimiter("\\Z").next();
        Gson gson = new Gson();
        Type t = new TypeToken<Map<String, List<Map<String, String>>>>(){}.getType();
        Map<String, List<Map<String, String>>> parsed = gson.fromJson(data, t);

        //Type salespersonType = new TypeToken<Salesperson>(){}.getType();
        //Type saleType = new TypeToken<Sale>(){}.getType();
        //this._salespeople = gson.fromJson(parsed.get("salespeople"), salespersonType);
        //this._sales = gson.fromJson(parsed.get("sales"), saleType);
        System.out.println(parsed);
        System.out.println(this._salespeople);
        System.out.println(this._sales);
    }

    // 1) Salespeople
    // Command: salespeople
    // This function should print a list of all the salespeople (just their names)
    // e.g.
    //     Bob Smith
    //     Sarah Jenkins
    //     Isaac Peterson
    //     ...
    public void salespeople() {
        for (int i = 0; i < this._salespeople.length; ++i) {
            System.out.println(this._salespeople[i].getName());
        }
    };


    // 2)
    // This function should print information about the salesperson named 'name'
    // Specifically, their name, email and phone number
    // e.g.
    //     id: 'jdonaldson', name: 'Justin', email: 'jdonaldson@salesforce.com', phone: '1234567890'
    public void salespersonInfo(String name) {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    }



    // 3)
    // This function should print a list of all sales made, and then print both the
    // total number of sales and the the total amount.
    // e.g.
    //    Bob Smith sold $10000 worth to Acme, Inc on 1/1/2015
    //    Bob Smith sold $12000 worth to State Farm on 1/1/2015
    //    Bob Smith sold $7000 worth to Amazon on 1/1/2015
    //    totalSales: 3
    //    totalAmount: 20000
    public void sales() {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    };



    // 4)
    // Same as sales, but only include sales made by the sales person with id "salespersonId"
    public void salesByPerson(String salespersonId) {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    };



    // 5)
    // Same as sales, but only include sales made to the client named "clientName"
    public void salesToClient(String clientName) {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    };



    // 6)
    // Same as sales, but only include sales made between startDate and endDate.
    public void salesInDateRange(String startDate, String endDate) {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    };


    // 7)
    // This function should print a list of the names of all the clients that 
    // were sold to.
    // e.g.
    //      Wal-Mart
    //      Microsoft
    //      State Farm Insurance
    //      ...
    public void clients() {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    };


    // 8)
    // Print a list of all the sales people and the total amounts they have sold,
    // Bonus points - sort it from biggest amount to smallest.
    // e.g.
    //     avanpelt: $125000
    //     gpascale: $100000
    //     jdonaldson: $60000
    //     ...
    public void salespeopleRanking() {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    }



    // 9)
    // Print a list of all the clients we have sold to and the total amount sold to each
    // Bonus points. Sort from biggest to smallest.
    // e.g.
    //     Acme, Inc: $100000
    //     Salesforce.com: $80000
    //     Microsoft: $60000
    //     Whole Foods: $25000
    public void clientRanking() {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    }



    // 10)
    // Print out some statistics about a particular salesperson. In particular
    // their # of sales, total dollar amount of all sales, average sale amount,
    // and median sale amount
    // e.g.
    //     # Sales: 43
    //     Total $: 860000
    //     Avg Sale $: 20000
    //     Median Sale $: 56000
    public void salespersonStats(String salespersonId) {
        System.out.println("Not yet implemented.");
        /* * * * * * * * * * * * * * * * * * * * * * *
         *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
         * * * * * * * * * * * * * * * * * * * * * * */
    }
}