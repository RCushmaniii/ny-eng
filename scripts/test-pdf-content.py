import json

# Load one resource
with open('src/data/free/status-update-script.json', 'r', encoding='utf-8') as f:
    content = json.load(f)

en = content.get('en', {})
print(f"Title: {en.get('title')}")
print(f"\nSections found: {len(en.get('sections', []))}")

sections = en.get('sections', [])
for i, section in enumerate(sections):
    print(f"\n--- Section {i+1} ---")
    print(f"ID: {section.get('id')}")
    print(f"Title: {section.get('title')}")
    print(f"Has content: {'content' in section}")
    print(f"Has items: {'items' in section}")
    
    if section.get('items'):
        print(f"Number of items: {len(section['items'])}")
        for j, item in enumerate(section['items'][:2]):  # First 2 items
            print(f"  Item {j+1}: {item.get('title', 'No title')}")
