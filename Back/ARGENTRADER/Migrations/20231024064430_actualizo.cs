using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ARGENTRADER.Migrations
{
    /// <inheritdoc />
    public partial class actualizo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "state",
                table: "User",
                newName: "State");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "State",
                table: "User",
                newName: "state");
        }
    }
}
