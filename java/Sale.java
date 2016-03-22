import java.util.Date;

public class Sale {

    private String _salespersonId;
    private int _amount;
    private Date _date;
    private String _client;

    public Sale(String salespersonId, int amount, Date date, String client) {
        this._salespersonId = salespersonId;
        this._amount = amount;
        this._date = date;
        this._client = client;
    }

    // Getter methods
    public String getSalespersonId() {
        return this._salespersonId;
    }

    public int getAmount() {
        return this._amount;
    }

    public Date getDate() {
        return this._date;
    }

    public String getClient() {
        return this._client;
    }

    // Setter methods
    public void setSalespersonId(String salespersonId) {
        this._salespersonId = salespersonId;
    }

    public void setAmount(int amount) {
        this._amount = amount;
    }

    public void setDate(Date date) {
        this._date = date;
    }

    public void setClient(String client) {
        this._client = client;
    }
    
}