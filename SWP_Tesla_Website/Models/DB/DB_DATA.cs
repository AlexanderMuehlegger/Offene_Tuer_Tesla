namespace SWP_Tesla_Website.Models.DB {
    public class DB_DATA {
        private static string IP = "localhost";
        private static string port = "3306";
        public static string database = "tesla";
        private static string user = "root";
        private static string password = "";

        public static string connectionStr = (port == "")? $"server={IP};port={port};database={database};uid={user};password={password}"
                                            : $"server={IP};database={database};uid={user};password={password}";
    }
}
