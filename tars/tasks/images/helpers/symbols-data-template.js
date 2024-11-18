__iconsData: {
    <% _.forEach(icons, icon => { %>
        '<%= icon.name %>'
    :
        {
            width: '<%= icon.width %>px',
                hight
        :
            '<%= icon.height %>px'
        }
    ,
        <%
    });
%>
}
