namespace Application.Core
{
    public class Result<T>
    {
        // Property to indicate if the operation was successful or not.
        public bool isSuccess { get; set; }

        // The Value property stores the result of the operation if it was successful.
        // Its type is T, making it flexible to store any type of object.
        public T Value { get; set; }

        // The Error property stores the error message if the operation failed.
        public string Error { get; set; }

        // A static method to create a successful Result object.
        // It takes a parameter of type T, sets isSuccess to true, and assigns the value to the Value property.
        public static Result<T> Success(T value) => new Result<T> { isSuccess = true, Value = value };

        // A static method to create a failed Result object.
        // It takes a string error message, sets isSuccess to false, and assigns the error message to the Error property.
        public static Result<T> Failure(string error) => new Result<T> { isSuccess = false, Error = error };
    }
}
