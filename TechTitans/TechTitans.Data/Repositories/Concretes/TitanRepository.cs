using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using TechTitans.Domain.Entities;
using TechTitans.Data.Repositories.Interfaces;

namespace TechTitans.Data.Repositories.Concretes
{
    public class TitanRepository : ITitanRepository
    {
        #region Private Members

        private static List<Titan> _repo = new List<Titan>();

        #endregion

        #region Constructor

        public TitanRepository()
        {
            if (_repo.Count == 0)
            {
                _repo.Add(new Titan() { Id = 0, Name = "Steve Jobs" });
                _repo.Add(new Titan() { Id = 1, Name = "Elon Musk" });
                _repo.Add(new Titan() { Id = 2, Name = "Satya Nadella" });
            }
        }

        #endregion

        #region  Public Methods

        public IEnumerable<Titan> GetAll()
        {
            return _repo;
        }

        public void Add(Titan titan)
        {
            // get the next Id
            titan.Id = _repo.Last().Id + 1;

            _repo.Add(titan);
        }

        public void Update(Titan titan)
        {
            // Delete
            Delete(titan);

            // Then Add
            Add(titan);
        }

        public void Delete(Titan titan)
        {
            _repo.RemoveAt(titan.Id);
        }

        public Titan GetById(int Id)
        {
            return _repo.Where(t => t.Id == Id).FirstOrDefault();
        }

        #endregion
    }
}
