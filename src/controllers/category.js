import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';


export const categoryGetAll = async (req, res = response) => {

  try {
      const pool = await getConnection();
  
      const result = await pool.request()
          .execute(queries.categoryGetAll);

      const { recordset } = result;

      res.status(200).json({
          ok: true,
          recordset,
      });
  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
};

export const categoryGetById = async(req, res = response) => {
  
  try {

      const id = req.params.id;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("Categoria", id)
          .execute(queries.categoryGetById);
      
      const recordset  = result.recordset[0];
      
      if ( !recordset ) {
          return res.status(404).json({
              ok: false,
              msg: 'No extisten registros'
          });
      }

      res.status(200).json({
        ok: true,
        recordset,
      });

  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
}

export const categoryAddNew = async(req, res = response) => {

  try {

      const { Categoria, Descripcion } = req.body;
  
      const pool = await getConnection();
    
      const result = await pool.request()
          .input("categoria", Categoria)
          .input("descripcion", Descripcion)
          .execute(queries.categoryAddNew);

      const { Resultado:resultado } = result.recordset[0];

      if ( resultado === 0) {
          return res.status(303).json({
              ok: false,
              msg: 'La categoria ya existe'
          });
      }

      res.status(201).json({
        ok: true,
        msg: 'Datos guardados correctamente'
      });
      
  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
}

export const categoryUpdateById = async(req, res = response) => {

  try {

      const { Descripcion } = req.body;
      console.log(Descripcion)
      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("Categoria", id)
          .input("Descripcion", Descripcion)
          .execute(queries.CategoryUpdateById);

      const { Resultado:resultado } = result.recordset[0];

      if ( resultado !== 1) {
          return res.status(303).json({
              ok: false,
              msg: 'ocurri?? un error al modificar'
          });
        }

        res.status(201).json({
            ok: true,
            msg: 'Datos modificados correctamente'
        });
    
  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
}

export const categoryDeleteById = async(req, res = response) => {

  try {
      
      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("categoria", id)
          .execute(queries.categoryDeleteById);

          const { Resultado:resultado } = result.recordset[0];

      if ( resultado !== 1) {
          return res.status(303).json({
              ok: false,
              msg: 'ocurri?? un error al eliminar'
          });
        }

        res.status(201).json({
            ok: true,
            msg: 'Datos eliminados correctamente'
        });

  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
};