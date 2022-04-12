﻿using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

namespace Core.Extensions
{
    //adding new methods to existing .Net entity
    public static class ClaimExtensions
    {
        public static void AddEmail(this ICollection<Claim> claims, string email)       //adding method (extend) to ICollection<Claim>
        {
            claims.Add(new Claim(JwtRegisteredClaimNames.Email, email));                //we also can add this row to JWT helper directy (without using extension)
        }

        public static void AddName(this ICollection<Claim> claims, string name)
        {
            claims.Add(new Claim(ClaimTypes.Name, name));
        }

        public static void AddNameIdentifier(this ICollection<Claim> claims, string nameIdentifier)
        {
            claims.Add(new Claim(ClaimTypes.NameIdentifier, nameIdentifier));
        }

        public static void AddRoles(this ICollection<Claim> claims, string[] roles)
        {
            roles.ToList().ForEach(role => claims.Add(new Claim(ClaimTypes.Role, role)));
        }
    }
}
