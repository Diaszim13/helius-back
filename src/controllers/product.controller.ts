import MachineModel from "../db/models/machine";

export const getMachineList = async (req: any, res: any) => {
  const machineList = await MachineModel.findAll({
    where: {
        status: 'RODANDO'
    }
  });

  return res.send({ machines: machineList }).status(200);
};

export const getInativeMachineList = async (req: any, res: any) => {
  const machineList = await MachineModel.findAll({
    where: {
      status: "INATIVO",
    },
  });
  
    return res.send({machines: machineList}).status(200);
};

export const getMachineById = async(req: any, res: any) => {
  const machine = await MachineModel.findByPk(req.params.id);

  if(machine) 
  {
    return res.send({machine: machine}).status(200);
  }
}
