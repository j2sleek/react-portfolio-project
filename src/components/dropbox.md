# Dropbox Integration

This document describes the integration of Dropbox with SmythOS, enabling seamless interaction with Dropbox file and folder operations, as well as tagging.

## Settings

### Authentication Key
To use Dropbox API through SmythOS, you need an OAuth 2.0 access token. Follow these steps to obtain it:
1. Navigate to the Dropbox App Console.
2. Create a new app and retrieve the tokens.
3. Configure SmythOS to use the Dropbox token for API interactions.

> **Note:** Always keep your API token secure and follow best practices for token management.

## Dropbox API Endpoints

### File/Folder Operations

1. **Delete File/Folder**
   - **Endpoint:** `/files/delete_v2`
   - **Description:** Deletes the specified file or folder.
   - **Inputs:**
     - **`path` `required<String>`** - Path of the file or folder to delete.
   - **Outputs:**
     - **`metadata`** - Information about the deleted item.

2. **Download File**
   - **Endpoint:** `/files/download`
   - **Description:** Downloads a file from Dropbox.
   - **Inputs:**
     - **`path` `required<String>`** - Path of the file to download.
   - **Outputs:**
     - **`fileContent`** - The binary content of the file.

3. **Export File**
   - **Endpoint:** `/files/export`
   - **Description:** Exports a Paper document to a specified format.
   - **Inputs:**
     - **`path` `required<String>`** - Path of the document to export.
     - **`format` `optional<String>`** - Format to export the document.
   - **Outputs:**
     - **`fileContent`** - The exported document file.

4. **List Folder Content**
   - **Endpoint:** `/files/list_folder`
   - **Description:** Lists contents of a folder.
   - **Inputs:**
     - **`path` `required<String>`** - Path of the folder.
   - **Outputs:**
     - **`entries`** - Array of file or folder names.

5. **List Folder Continue**
   - **Endpoint:** `/files/list_folder/continue`
   - **Inputs and Outputs:** Same as `list_folder`, but requires `cursor`.

6. **Move File/Folder**
   - **Endpoint:** `/files/move_v2`
   - **Description:** Moves a file or folder to a new location.
   - **Inputs:**
     - **`from_path` `required<String>`** - Current path.
     - **`to_path` `required<String>`** - Destination path.
   - **Outputs:**
     - **`metadata`** - Information about moved item.

### Search and Tagging Operations

7. **Search Files/Folder**
   - **Endpoint:** `/files/search_v2`
   - **Description:** Searches for files and folders.
   - **Inputs:**
     - **`query` `required<String>`** - Search query.
   - **Outputs:**
     - **`matches`** - Array of matching paths.

8. **Search Continue**
   - **Endpoint:** `/files/search/continue_v2`
   - **Inputs and Outputs:** Continues a search given a `cursor`.

9. **Tag Item**
   - **Endpoint:** `/files/tags/add`
   - **Description:** Adds tags to a file or folder.
   - **Inputs:**
     - **`path` `required<String>`** - Item path.
     - **`tags` `required<Array<String>>`** - Tags to add.
   - **Outputs:**
     - **`tags`** - Updated list of tags.
   
10. **Get Item Tags**
    - **Endpoint:** `/files/tags/get`
    - **Description:** Retrieves tags for an item.
    - **Inputs:**
      - **`path` `required<String>`** - Item path.
    - **Outputs:**
      - **`tags`** - List of tags.

11. **Remove Item Tags**
    - **Endpoint:** `/files/tags/remove`
    - **Description:** Removes specified tags from an item.
    - **Inputs:**
      - **`path` `required<String>`** - Item path