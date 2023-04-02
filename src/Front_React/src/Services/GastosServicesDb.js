import Database from './DbServices';

const DB_EXECT = Database.getConnection();

export const getGastos = async () => {
  let results = await DB_EXECT(`select * from gastos`);
  console.log(results);
  return results.rows._array;

};

export const insertGastos = async (param) => {
  let results = await DB_EXECT(`insert into gastos(tipo, data, preco, valor, odometro) values(?,?,?,?,?)`,
    [param.tipo, param.data, param.preco, param.valor, param.odometro]
  );
  return results.rowsAffected;
};

export const updateGastos = async (param) => {
  let results = await DB_EXECT(`update gastos set tipo=?, data=?, preco=?, valor=?, odometro=?
  where id=?`, [param.tipo, param.data, param.preco, param.valor, param.odometro, param.id]);
  return results.rowsAffected;
};

export const deleteGastos = async (id) => {
  let results = await DB_EXECT(`delete from gastos where id=?`, [id]);
  return results.rowsAffected;
};
