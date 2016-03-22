public class Salesperson {

    private String _name;
    private String _phone;
    private String _email;
    private String _id;

    public Salesperson(String name, String phone, String email, String id) {
        this._name = name;
        this._phone = phone;
        this._email = email;
        this._id = id;
    }

    // Getter methods
    public String getName() {
        return this._name;
    }

    public String getPhone() {
        return this._phone;
    }

    public String getEmail() {
        return this._email;
    }

    public String getId() {
        return this._id;
    }

    // Setter methods
    public void setName(String name) {
        this._name = name;
    }

    public void setPhone(String phone) {
        this._phone = phone;
    }

    public void setEmail(String email) {
        this._email = email;
    }

    public void setId(String id) {
        this._id = id;
    }
    
}