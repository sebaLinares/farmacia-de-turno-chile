/* prettier-ignore */
export interface Farmacia {
  fecha: string;
  local_id: string;
  local_nombre: string;
  comuna_nombre: string;
  fk_localidad: string;
  localidad_nombre: string;
  local_direccion: string;
  funcionamiento_hora_apertura: string;
  funcionamiento_hora_cierre: string;
  local_telefono: string;
  local_lat: string;
  local_lng: string;
  funcionamiento_dia: string;
  fk_region: string;
  fk_comuna: string;
}
