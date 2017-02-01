using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using TechTitans.Domain.Entities;
using TechTitans.Data.Repositories.Concretes;
using TechTitans.Data.Repositories.Interfaces;

namespace TechTitans.WebAPI.Services
{
    public class TitanService : ITitanRepository
    {
        #region Private Members

        TitanRepository _repo;

        #endregion

        #region Constructor

        public TitanService()
        {
            this._repo = new TitanRepository();
        }

        #endregion

        #region Public Methods

        public IEnumerable<Titan> GetAll()
        {
            return this._repo.GetAll();
        }

        public void Add(Titan titan)
        {
            this._repo.Add(titan);
        }

        public void Update(Titan titan)
        {
            this._repo.Update(titan);
        }

        public void Delete(Titan titan)
        {
            this._repo.Delete(titan);
        }

        public Titan GetById(int Id)
        {
            return this._repo.GetById(Id);
        }

        #endregion
    }
}