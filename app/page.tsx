import React from "react";

export default function Home() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>London Confessions</h1>
        <b >21 - 28 July 2025</b>
      </div>

      {/* {byParish()} */}
      {byTime()}
    </div>
  );
}

function byParish() {
  return (
    <div>
      <h2>Brompton Oratory</h2>
      <p>Weekdays 12:00-12:30 and 17:30-18:00</p>
      <p>Saturdays 10:00-12:45 and 15:00-18:00</p>
      <p>Sundays after each Mass, and 18:00-18:50</p>
      <h2>Most Precious Blood, Borough Market</h2>
      <p>Tuesday-Friday: 12:30-13:00</p>
      <p>Saturday: 10:00-10:25</p>
      <h2>St Patrick's, Soho</h2>
      <p>Weekdays 12:00-12:40</p>
      <p>Saturdays 17:30-18:00</p>
      <h2>St Mary Moorfield's, Liverpool Street</h2>
      <p>Weekdays 12:30pm</p>
      <h2>Westminster Cathedral</h2>
      <p>Weekdays 11:30-12:30, 16:30-17:30</p>
      <p>Satuday 11:30-12:30, 17:00-18:00</p>
      <p>Sunday 10:30-12:30, 17:00-18:30</p>
    </div>
  );
}

function byTime() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <b>
          <u>Mon</u> / Tues / Weds / Thurs / Fri / Sat / Sun
        </b>
      </div>

      <h2>11:30</h2>
      <a href="https://westminstercathedral.org.uk/">Westminster Cathedral</a>
      {/* <p>Westminster Cathedral</p> */}
      <p>Sts Peter & Paul, Clerkenwell</p>
      <h2>12:00</h2>
      <s>Brompton Oratory, Knightsbridge</s>
      <p>Immaculate Conception, Farm Street</p>
      <p>St George's Cathedral, Southwark</p>
      <p>St James', Spanish Place</p>
      <p>St Patrick's, Soho</p>
      <p>Westminster Cathedral</p>
      <h2>12:15</h2>
      <p>Our Lady of the Assumption, Warwick Street </p>
      <h2>12:30</h2>
      <p>St James', Spanish Place</p>
      <p>St Mary Moorfield's, Liverpool Street</p>
      <p>Immaculate Conception, Farm Street</p>
      <h2>12:35</h2>
      <p>Corpus Christi, Covent Garden</p>
      <h2>13:20</h2>
      <p>St Etheldreda's, Farringdon</p>
      <h2>16:30</h2>
      <p>Westminster Cathedral</p>
      <h2>17:00</h2>
      <p>Westminster Cathedral</p>
      <h2>17:30</h2>
      <p>Brompton Oratory, Knightsbridge ⚠️</p>
      <p>Notre Dame de France (French), Leicester Square</p>
      <p>St Anselm and St Cæcilia, Holborn</p>
      <h2>17:40</h2>
      <p>Our Lady of Mount Carmel, Kensington</p>
      <h2>17:45</h2>
      <p>Ukrainian Catholic Cathedral, Bond Street</p>
    </div>
  );
}
