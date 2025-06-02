import farmacias from '../db/farm.json';

export function getPharmacyForDate(date: Date): any {
    // Fecha base: 1 de enero de 2025
    const baseDate = new Date(2025, 0, 1);
    
    // Calcular días desde la fecha base
    const daysSinceBase = Math.floor((date.getTime() - baseDate.getTime()) / (24 * 60 * 60 * 1000));
    
    // Calculate the circular index (1-10)
    // Ajustamos el cálculo para que el 1 de enero sea ID 1
    const circularIndex = (daysSinceBase % 10) + 1;
    
    // Find the pharmacy with the calculated circular index
    const pharmacy = farmacias.find(f => f.id === circularIndex);
    console.log(`Fecha: ${date.toLocaleDateString()}, Días desde base: ${daysSinceBase}, Índice: ${circularIndex}, Farmacia:`, pharmacy);
    
    if (!pharmacy) {
        console.warn(`No hay farmacia de guardia para el día ${daysSinceBase} (circular index: ${circularIndex})`);
        return null;
    }
    
    return pharmacy;
}

// Example usage:
// const todayPharmacy = getPharmacyForDate(new Date());
