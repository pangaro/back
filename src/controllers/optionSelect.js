import { response } from "express";
import { getConnection } from "../database/connection";
import { queries } from "../database/querys";

export const guardTypeGetAll = async (req, res = response) => {
  try {
    const pool = await getConnection();

    const result = await pool.request().execute(queries.guardTypeGetAll);

    const { recordset } = result;

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

export const modalityHourGetAll = async (req, res = response) => {
  try {
    const pool = await getConnection();

    const result = await pool.request().execute(queries.modalityHourGetAll);

    const { recordset } = result;

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

export const dayServiceGetAll = async (req, res = response) => {
  try {
    const pool = await getConnection();

    const result = await pool.request().execute(queries.dayServiceGetAll);

    const { recordset } = result;

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

export const categorySelectGetAll = async (req, res = response) => {
  try {
    const pool = await getConnection();

    const result = await pool.request().execute(queries.categorySelectGetAll);

    const { recordset } = result;

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