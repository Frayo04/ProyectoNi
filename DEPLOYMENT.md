# GitHub Pages Deployment Setup

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

## 🚀 Cómo funciona

1. **Cambios automáticos**: Cuando hagas push a la rama `main`, se ejecuta automáticamente el workflow de despliegue
2. **Compilación**: Se instalan las dependencias y se compila el proyecto
3. **Despliegue**: Los archivos compilados se suben a GitHub Pages

## 📍 URL de acceso

Tu sitio estará disponible en:
```
https://Frayo04.github.io/ProyectoNi/
```

## 🔧 Configuración realizada

- ✅ Workflow de GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Base path configurado en `vite.config.ts` para `/ProyectoNi/`
- ✅ Permisos configurados en repositorio

## 📋 Pasos finales manuales

1. Ve a: **Settings** → **Pages**
2. En "Build and deployment", selecciona:
   - Source: **GitHub Actions**
3. El despliegue comenzará automáticamente

## ✅ Verificar despliegue

Después de hacer merge, espera ~2-3 minutos y visita:
```
https://Frayo04.github.io/ProyectoNi/
```

## 🔄 Información adicional

- **Rama de despliegue**: `main`
- **Directorio de salida**: `dist` (dentro de `jossforge`)
- **Node version**: 20

Para más detalles, consulta el archivo `.github/workflows/deploy.yml`
