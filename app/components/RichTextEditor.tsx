import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  readOnly?: boolean;
  className?: string;
  id?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = '',
  minHeight = 100,
  maxHeight = 500,
  readOnly = false,
  className = '',
  id = 'rich-text-editor'
}) => {
  return (
    <div className={className}>
      <Editor
        id={id}
        apiKey="itwnsqy4se8az6mniqgptmai3delk24gq1z6qvl68x3mveld"
        value={value}
        init={{
          menubar: false,
          toolbar: 'undo redo | bold italic underline | forecolor backcolor | bullist numlist',
          plugins: ['lists', 'textcolor'],
          statusbar: false,
          min_height: minHeight,
          max_height: maxHeight,
          placeholder: placeholder,
          disabled: readOnly,
          content_style: `
            body { 
              font-family: system-ui, -apple-system, sans-serif;
              font-size: 14px;
              line-height: 1.5;
              margin: 0;
              padding: 8px;
            }
          `,
          textcolor_map: [
            { "000000": "Black" },
            { "FF0000": "Red" },
            { "00FF00": "Green" },
            { "0000FF": "Blue" },
            { "FFFF00": "Yellow" },
            { "00FFFF": "Cyan" },
            { "FF00FF": "Magenta" },
            { "FFA500": "Orange" },
            { "800080": "Purple" },
            { "008080": "Teal" },
            { "FFC0CB": "Pink" },
            { "A52A2A": "Brown" },
            { "808080": "Gray" },
            { "FFFFFF": "White" }
          ],
          textcolor_rows: 7,
          textcolor_cols: 2,
          textcolor_map_groups: true,
          textcolor_default_map: "000000",
          textcolor_default_background_map: "FFFFFF"
        }}
        onEditorChange={(content) => onChange(content || '')}
      />
    </div>
  );
};

export default RichTextEditor; 