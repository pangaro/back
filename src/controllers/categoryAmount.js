import { response } from "express";
import { getConnection } from "../database/connection";
import { queries } from "../database/querys";

export const categoryAmountGetAll = async (req, res = response) => {
  const { Anio, Categoria } = req.body;

  try {
    const Cat = typeof Categoria !== "undefined" ? Categoria : null;

    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Anio", Anio)
      .input("Categoria", Cat)
      .execute(queries.categoryAmountGetAll);

    const { recordset } = result;

    if (recordset.length === 0) {
      return res.status(404).json({
        ok: false,
        msg: "No extisten registros",
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
      msg: "Comuniquese con el Administrador",
    });
  }
};

export const categoryAmountAddNew = async (req, res = response) => {
  try {
    const {
      Categoria,
      Anio,
      ModalidadHorariaID,
      DiasServicioID,
      GuardiaTipoID,
      Monto,
      Usuario,
    } = req.body;

    const pool = await getConnection();

    await pool
      .request()
      .input("Categoria", Categoria)
      .input("Anio", Anio)
      .input("ModalidadHorariaID", ModalidadHorariaID)
      .input("DiasServicioID", DiasServicioID)
      .input("GuardiaTipoID", GuardiaTipoID)
      .input("Monto", Monto)
      .input("Usuario", Usuario)
      .execute(queries.categoryAmountAddNew);

    res.status(201).json({
      ok: true,
      msg: "Datos guardados correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Comuniquese con el Administrador",
    });
  }
};

export const categoryAmountUpdateById = async (req, res = response) => {
  try {
    const { id } = req.params;

    const {
      Categoria,
      Anio,
      ModalidadHorariaID,
      DiasServicioID,
      GuardiaTipoID,
      Monto,
      Usuario
    } = req.body;

    const pool = await getConnection();

    await pool
      .request()
      .input("CategoriaMontosID", id)
      .input("Categoria", Categoria)
      .input("Anio", Anio)
      .input("ModalidadHorariaID", ModalidadHorariaID)
      .input("DiasServicioID", DiasServicioID)
      .input("GuardiaTipoID", GuardiaTipoID)
      .input("Monto", Monto)
      .input("Usuario", Usuario)
      .execute(queries.CategoryAmountUpdateById);

    res.status(201).json({
      ok: true,
      msg: "Datos modificados correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Comuniquese con el Administrador",
    });
  }
};

export const categoryAmountDeleteById = async (req, res = response) => {
  try {
    const { id } = req.params;

    const pool = await getConnection();

    await pool
      .request()
      .input("categoriaMontosId", id)
      .execute(queries.categoryAmountDeleteById);

    res.status(201).json({
      ok: true,
      msg: "Datos eliminados correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Comuniquese con el Administrador",
    });
  }
};
