// scripts/updateImports.js
import { readdir, readFile, writeFile } from "fs";

const directoryPath = "./dist"; // Ruta a tu directorio de salida de TypeScript

// Lee los archivos en el directorio y actualiza los imports
readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error al leer directorio:", err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(".js")) {
      const filePath = `${directoryPath}/${file}`;
      readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error al leer archivo:", err);
          return;
        }

        // Realiza los cambios en los imports aquí
        const updatedContent = data.replace(
          /from\s+['"](.*?)['"]/g,
          "from '$1.js'"
        );

        // Escribe los cambios en el archivo
        writeFile(filePath, updatedContent, "utf8", (err) => {
          if (err) {
            console.error("Error al escribir archivo:", err);
          }
        });
      });
    }
  });
});
