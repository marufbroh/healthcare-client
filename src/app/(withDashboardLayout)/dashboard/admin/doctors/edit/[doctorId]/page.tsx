type TParams = {
    params: {
        doctorId: string
    }
}

const DoctorUpdatePage = ({ params: {doctorId} }: TParams) => {
 
  return (
    <div>
      <h1>This is DoctorUpdatePage component</h1>
    </div>
  );
};

export default DoctorUpdatePage;
