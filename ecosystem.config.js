module.exports = {
  apps: [
    {
      name: 'menu-calculator-app',
      exec_mode: 'cluster',
      instances: -1,
      cwd: '/app',
      script: './bin/www',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    }
  ]
}