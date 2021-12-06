import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tb_lista_diabolica from  "./tb_lista_diabolica.js";
import _tb_lista_negra from  "./tb_lista_negra.js";
import _tb_pessoas from  "./tb_pessoas.js";
import _tb_produto from  "./tb_produto.js";
import _tb_rodrigo from  "./tb_rodrigo.js";

export default function initModels(sequelize) {
  const tb_lista_diabolica = _tb_lista_diabolica.init(sequelize, DataTypes);
  const tb_lista_negra = _tb_lista_negra.init(sequelize, DataTypes);
  const tb_pessoas = _tb_pessoas.init(sequelize, DataTypes);
  const tb_produto = _tb_produto.init(sequelize, DataTypes);
  const tb_rodrigo = _tb_rodrigo.init(sequelize, DataTypes);

return{
    tb_lista_diabolica,
    tb_lista_negra,
    tb_pessoas,
    tb_produto,
    tb_rodrigo,
  };
}
