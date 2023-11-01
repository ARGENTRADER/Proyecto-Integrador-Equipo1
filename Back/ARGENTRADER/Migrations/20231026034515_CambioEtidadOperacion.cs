using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ARGENTRADER.Migrations
{
    /// <inheritdoc />
    public partial class CambioEtidadOperacion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OperationType",
                table: "Operation");

            migrationBuilder.AlterColumn<string>(
                name: "ShareCode",
                table: "Operation",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ShareCode",
                table: "Operation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OperationType",
                table: "Operation",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
