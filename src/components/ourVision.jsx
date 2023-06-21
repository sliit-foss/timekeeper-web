const timeLine = (data) => {
  return (
    <div key={data.id}>
      <img src={data.imgSrc} alt={data.imgAlt} />
      <span>.</span>
      <div>
        <p>{data.details}</p>
        <p>{data.date}</p>
      </div>
    </div>
  );
};

const OurVision = ({ dataList }) => {
  return (
    <>
      {console.log(dataList)}
      <div>
        <h1>Our Vision</h1>
        <p>
          A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript
          source code
        </p>
      </div>
      <div>{dataList && dataList.map((data) => timeLine(data))}</div>
    </>
  );
};

export default OurVision;
