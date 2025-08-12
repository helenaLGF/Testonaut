from jinja2 import Environment, FileSystemLoader

# Créer un environnement Jinja et indiquer où se trouve le template
env = Environment(loader=FileSystemLoader('templates'))

# Charger le template
template = env.get_template('template.html')

# Les données à passer dans le template
data = {
    'title': 'Page de test',
    'heading': 'Liste des éléments',
    'items': ['Élément 1', 'Élément 2', 'Élément 3']
}

# Rendre le template avec les données
output = template.render(data)

# Afficher ou enregistrer le résultat
print(output)

# Si tu veux l'enregistrer dans un fichier HTML
with open('output.html', 'w') as f:
    f.write(output)
