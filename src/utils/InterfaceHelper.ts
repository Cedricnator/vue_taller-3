// Cambia el color de cada personaje si está cerca de atacar
export function updateBorderColor(elementClass: string, color: string): void {
    if(elementClass && elementClass.startsWith('.')) {
      elementClass = elementClass.slice(1);
    }
    const element: HTMLElement | null = document.getElementById(elementClass);
    if (element) {
      element.style.borderColor = color;
    }
}

// Actualizar la barra de vida en la interfaz
export function updateHealth(progressElementId: string, health: number): void {
    const progressElement: HTMLProgressElement | null = document.getElementById(progressElementId) as HTMLProgressElement;
    if (progressElement) {
        progressElement.value = health;
    }
}

// Agregar y remover una clase a un elemento
export function addAndRemoveClass(elementId: string, className: string, timeout: number): void {
    const element: HTMLElement | null = document.getElementById(elementId);
    if (element) {
        element.classList.add(className);
        setTimeout(() => element.classList.remove(className), timeout);
    }
}