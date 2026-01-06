const rows = [
  { field: "Email", original: "user@example.com", anon: "" },
  { field: "Phone", original: "+880123456789", anon: "" },
  { field: "Name", original: "John Doe", anon: "" }
];

const tbody = document.getElementById("data");

function render() {
  tbody.innerHTML = "";
  rows.forEach(r => {
    tbody.innerHTML += `
      <tr>
        <td>${r.field}</td>
        <td>${r.original}</td>
        <td>${r.anon}</td>
      </tr>
    `;
  });
}

function anonymize() {
  rows.forEach(r => {
    r.anon = "***REDACTED***";
  });
  render();
}

render();
