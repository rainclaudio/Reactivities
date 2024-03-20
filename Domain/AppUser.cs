using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {

        public string DisplayName { get; set; }
        // description about themselves
        public string Bio {  get; set; }

    }
}
