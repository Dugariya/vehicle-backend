import mongoose from "mongoose";

const vehicleDetails = new mongoose.Schema({
  MVRegN: String,
  LicN: String,
  VinOrChassis: String,
  EngineN: String,
  SAPMark: {
    Code: Number,
    Desc: String,
  },
  MVLicChgD: Date,
  MVLicExpiryD: Date,
  RegAuthOfLic: {
    Code: Number,
    Desc: String,
  },
  RegAuthOfRegtN: {
    Code: Number,
    Desc: String,
  },
  ModelName: {
    Code: String,
    Desc: String,
  },
  MVCat: {
    Code: String,
    Desc: String,
  },
  Driven: {
    Code: Number,
    Desc: String,
  },
  MVDesc: {
    Code: Number,
    Desc: String,
  },
  Make: {
    Code: String,
    Desc: String,
  },
  MainColour: {
    Code: Number,
    Desc: String,
  },
  GVM: Number,
  EngineDisp: Number,
  Tare: Number,
  FuelType: {
    Code: Number,
    Desc: String,
  },
  NetPower: Number,
  MVRegtD: Date,
  MVRegtTypeQual: {
    Code: Number,
    Desc: String,
  },
  RWStat: {
    Code: Number,
    Desc: String,
  },
  MVState: {
    Code: Number,
    Desc: String,
  },
  MVLifeStat: {
    Code: Number,
    Desc: String,
  },
  NModelN: Number,
  RWTstD: Date,
  SAPClrStat: {
    Code: Number,
    Desc: String,
  },
  MVUsage: {
    Code: Number,
    Desc: String,
  },
  MVEconSector: {
    Code: Number,
    Desc: String,
  },
  PrevLicN: String,
  PrevMVCertN: String,
  VehType: {
    Code: Number,
    Desc: String,
  },
  VehUsage: {
    Desc: String,
  },
  RWTstStatD: Date,
  MVRegtType: {
    Code: Number,
    Desc: String,
  },
  Exemption: {
    Code: Number,
    Desc: String,
  },
  RoadUseInd: String,
});

const personalDetails = new mongoose.Schema({
  PerId: {
    IdDocType: {
      Code: Number,
      Desc: String,
    },
    IdDocN: Number,
    Initials: String,
    BusOrSurname: String,
  },
  NatOfPer: {
    Code: Number,
    Desc: String,
  },
  NatPopGrp: {
    Code: Number,
    Desc: String,
  },
  BirthDate: Date,
  Age: Number,
  DCEEAddr: Number,
  ChgOfAddrD: Date,
  Exemption: {
    Code: Number,
    Desc: String,
  },
  OperCatg: {
    Code: Number,
    Desc: String,
  },
});
const vehicleSchema = new mongoose.Schema({
  StdRespHeader: {
    TxanName: String,
    ESTxanID: Number,
    ESUID: String,
  },
  Vehicle: {
    VehicleDet: vehicleDetails,
    Owner: {
      PerDet: personalDetails,
      RelDet: {
        RelStartD: Date,
        CurrStat: {
          Code: Number,
          Desc: String,
        },
        StatNat: {
          Code: Number,
          Desc: String,
        },
      },
    },
    PrevOwner: {
      OwnerShipD: Date,
    },
  },
});

const Vehicle = new mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
