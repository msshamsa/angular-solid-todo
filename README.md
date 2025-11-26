# Angular Solid Todo

![Angular](https://img.shields.io/badge/Angular-19-red)
![Clean Architecture](https://img.shields.io/badge/Architecture-Clean-brightgreen)
![SOLID](https://img.shields.io/badge/Principles-SOLID-blue)
![Signals](https://img.shields.io/badge/Reactivity-Signals-orange)

یک پروژه Todo حرفه‌ای با **Angular 19** که دقیقاً بر اساس:
- Clean Architecture  
- SOLID Principles  
- Angular Signals  
- Dependency Injection با InjectionToken  
- Standalone Components  

پیاده‌سازی شده.

## ساختار پروژه (Clean Architecture)
src/app/
├── core/
│   ├── domain/          → مدل‌ها و قوانین کسب‌وکار (خالص!)
│   ├── application/     → منطق برنامه (Use Cases)
│   └── infrastructure/  → ارتباط با دنیای بیرون (HTTP, DB, etc.)
├── ui/                  → فقط رابط کاربری (Angular Components)
└── app.config.ts        → DI و تنظیمات سراسری


## ویژگی‌ها
- ۱۰۰٪ تست‌پذیر
- کاملاً قابل توسعه (می‌تونی localStorage, GraphQL, Firebase اضافه کنی بدون دست زدن به منطق اصلی)
- بدون NgModule
- بدون RxJS در UI
- کاملاً حرفه‌ای و Enterprise-ready

## اجرا
```bash
npm install
ng serve
