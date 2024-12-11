FROM drupal:10-apache

# Install additional PHP extensions for PostgreSQL support
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    docker-php-ext-install pdo_pgsql pgsql && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /var/www/html

# Copy a custom services.yml file to enable CORS
COPY ./services.yml /var/www/html/sites/default/services.yml

# Ensure correct permissions for the services.yml file
RUN chown www-data:www-data /var/www/html/sites/default/services.yml && \
    chmod 644 /var/www/html/sites/default/services.yml

# Enable Apache headers module for CORS
RUN a2enmod headers

# Restart Apache to apply changes
CMD ["apache2-foreground"]

