// configurar ORM sequelize
const { Sequelize, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite:" + process.env.base );
const sequelize = new Sequelize("sqlite:" + process.env.base);


const articulos = sequelize.define(
  "articulos",
  {
    IdArticulo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre es requerido",
        },
        len: {
          args: [5, 60],
          msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este Nombre ya existe en la tabla!",
      },
    },
    Precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Precio es requerido",
        }
      }
    },
    CodigoDeBarra: {
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Codigo De Barra es requerido",
        },
        is: {
          args: ["^[0-9]{13}$", "i"],
          msg: "Codigo de Barra debe ser numerico de 13 digitos",
        },
      },
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Stock es requerido",
        }
      }
    },
    FechaAlta: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Fecha Alta es requerido",
        }
      }
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Activo es requerido",
        }
      }
    },
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (articulo, options) {
        if (typeof articulo.Nombre === "string") {
          articulo.Nombre = articulo.Nombre.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

const pacientes = sequelize.define(
  "pacientes",
  {
    IdPaciente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ApeNomPaciente: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "ApeNomPaciente es requerido",
        },
        len: {
          args: [5, 60],
          msg: "ApeNomPaciente debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este ApeNomPaciente ya existe en la tabla!",
      },
    },
    NroHCPaciente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "NroHCPaciente es requerido",
        },
      },
      unique: {
        args: true,
        msg: "este NroHCPaciente ya existe en la tabla!",
      },
    },
    DomicilioPaciente: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "DomicilioPaciente es requerido",
        }
      }
    },
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (pacientes, options) {
        if (typeof pacientes.ApeNomPaciente === "string") {
          pacientes.ApeNomPaciente = pacientes.ApeNomPaciente.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

const clientes = sequelize.define(
  "clientes",
  {
    IdCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ApellidoYNombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "ApellidoYNombre es requerido",
        },
        len: {
          args: [5, 60],
          msg: "ApellidoYNombre debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este ApellidoYNombre ya existe en la tabla!",
      },
    },
    DNI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "DNI es requerido",
        }
      }
    },
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (clientes, options) {
        if (typeof clientes.ApellidoYNombre === "string") {
          clientes.ApellidoYNombre = clientes.ApellidoYNombre.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

const hoteles = sequelize.define(
  "hoteles",
  {
    IdHotel: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NombreFantasia: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "NombreFantasia es requerido",
        },
        len: {
          args: [5, 60],
          msg: "NombreFantasia debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este NombreFantasia ya existe en la tabla!",
      },
    },
    Habitaciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Habitaciones es requerido",
        }
      }
    },
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (hoteles, options) {
        if (typeof hoteles.NombreFantasia === "string") {
          hoteles.NombreFantasia = hoteles.NombreFantasia.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

const vehiculos = sequelize.define(
  "vehiculos",
  {
    IdVehiculo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    VehiculoMarcaYModelo: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "VehiculoMarcaYModelo es requerido",
        },
        len: {
          args: [5, 60],
          msg: "VehiculoMarcaYModelo debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este VehiculoMarcaYModelo ya existe en la tabla!",
      },
    },
    VehiculoPrecio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "VehiculoPrecio es requerido",
        }
      }
    },
    VehiculoPatente: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "VehiculoPatente es requerido",
        },
        len: {
          args: [5, 60],
          msg: "VehiculoPatente debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este VehiculoPatente ya existe en la tabla!",
      },
    },
  },
  {
    // pasar a mayusculas
    hooks: {
      beforeValidate: function (vehiculos, options) {
        if (typeof vehiculos.VehiculoMarcaYModelo === "string") {
          vehiculos.VehiculoMarcaYModelo = vehiculos.VehiculoMarcaYModelo.toUpperCase().trim();
        }
      },
    },

    timestamps: false,
  }
);

module.exports = {
  sequelize,
  articulos,
  pacientes,
  clientes,
  hoteles,
  vehiculos
};
