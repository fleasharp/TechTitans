using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using TechTitans.Domain.Entities;

namespace TechTitans.Data.Repositories.Interfaces
{
    public interface ITitanRepository
    {
        IEnumerable<Titan> GetAll();
        void Add(Titan titan);
        void Update(Titan titan);
        void Delete(Titan titan);
        Titan GetById(int Id);
    }
}
