import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("https://strapi-rygs.onrender.com/api/prodis");
        const resData = data.data.data;
        const prodiData = resData[0].attributes.prodi[0][0];
        setData(prodiData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <b>{data.nama_prodi}</b>
        <br />
        <span>Kepala Prodi: {data.kepala_prodi}</span>
        <br />
        <span>Sekretaris: {data.sektretaris}</span>
      </div>
      <br />

      {data.mahasiswa && data.mahasiswa.map((item, index) => (
          <div key={index}>
            <b>Angkatan {item.tahun_masuk}</b>
            <br />
            <span>kelas Pagi</span>
            <table border={1}>
              <thead>
                <tr>
                  <th>NPM</th>
                  <th>Nama</th>
                  <th>Jenis Kelamin</th>
                  <th>Alamat</th>
                  <th>Hobi</th>
                </tr>
              </thead>
              <tbody>
                {item.data.pagi.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td>{item.jenis_kelamin}</td>
                    <td>{item.alamat}</td>
                    <td>{item.hobi.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />

            <span>kelas Malam</span>
            <table border={1}>
              <thead>
                <tr>
                  <th>NPM</th>
                  <th>Nama</th>
                  <th>Jenis Kelamin</th>
                  <th>Alamat</th>
                  <th>Hobi</th>
                </tr>
              </thead>
              <tbody>
                {item.data.malam.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td>{item.jenis_kelamin}</td>
                    <td>{item.alamat}</td>
                    <td>{item.hobi.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />

            <span>kelas cuti</span>
            <br />
            {item.data.cuti.length > 0 ? (
              <table border={1}>
                <thead>
                  <tr>
                    <th>NPM</th>
                    <th>Nama</th>
                    <th>Jenis Kelamin</th>
                    <th>Alamat</th>
                    <th>Hobi</th>
                  </tr>
                </thead>
                <tbody>
                  {item.data.cuti.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.nama}</td>
                      <td>{item.jenis_kelamin}</td>
                      <td>{item.alamat}</td>
                      <td>{item.hobi.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <span>Tidak Ada Mahasiswa Yang Mengambil Kelas Ini</span>
            )}
            <br />
          </div>
        ))}
    </>
  );
}

// function getNPM(tahunMasuk, kodeProdi){
//   // const tahunMasuk21 = tahunMasuk[0].substring(2,4)
//   // const tahunMasuk22 = tahunMasuk[1].substring(2,4)
//   // const prodiIF = kodeProdi[0]
//   // const prodiSI = kodeProdi[1]
  
//   const prodi1 = "212525"
//   const prodi2 = "222625"
//   const prodi3 = "212524"
//   const prodi4 = "222624"
//   console.log(tahunMasukIF);
//   return (
//     <>
//     {if(tahunMasuk = "2021" && kodeProdi = "24") {
//       {prodi3}
//     }else if (tahunMasuk = "2021" && kodeProdi = "25") {
//       {prodi1}
//     }else if (tahunMasuk = "2022" && kodeProdi = "24"){
//       {prodi4}
//     }else if(tahunMasuk = "2022" && kodeProdi = "25"){
//       {prodi2}
//     }}

    
//     </>
//   )
// }


export default App;
{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}