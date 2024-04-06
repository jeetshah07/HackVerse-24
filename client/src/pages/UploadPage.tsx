import { useState } from "react";

function UploadPage() {
  const [selectedFile, setSelectedFile]: any = useState();
  const [cid, setCid]: any = useState();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        `https://api.pinata.cloud/pinning/pinFileToIPFS`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      setCid(resData.IpfsHash);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <div className="bg-gray-800 p-4 rounded-md flex items-center">
        <label className="form-label mr-2">
          Choose File
          <input
            type="file"
            onChange={changeHandler}
            className="hidden"
          />
        </label>
        <span>
          {selectedFile && selectedFile.name}
        </span>
      </div>
      <button
        onClick={handleSubmission}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      {cid && (
        <div className="mt-4">
          <img
            className="max-w-full h-auto max-h-64"
            src={`${process.env.REACT_APP_GATEWAY_URL}/ipfs/${cid}`}
            alt="ipfs image"
          />
        </div>
      )}
    </div>
  );
}

export default UploadPage;
